// Protege /missoes/ com senha via Vercel Edge Middleware
// Define MISSOES_PASSWORD no Vercel (ou usa 'musgo' como fallback)

export const config = {
  matcher: '/missoes/:path*',
}

const PASSWORD = process.env.MISSOES_PASSWORD || 'musgo'
const COOKIE_NAME = 'missoes-auth'
const COOKIE_VALUE = '1'

export default async function middleware(req: Request): Promise<Response | undefined> {
  const url = new URL(req.url)
  const pathname = url.pathname

  // Libera assets estáticos
  if (pathname.match(/\.(css|js|woff2?|png|jpg|ico|svg)$/)) return

  // Já autenticado → deixa passar
  const cookies = req.headers.get('cookie') || ''
  if (cookies.includes(`${COOKIE_NAME}=${COOKIE_VALUE}`)) return

  // POST = submissão de senha
  if (req.method === 'POST') {
    try {
      const form = await req.formData()
      const password = form.get('password') as string
      const dest = form.get('dest') as string || '/missoes/'

      if (password === PASSWORD) {
        const res = Response.redirect(new URL(dest, url.origin), 302)
        res.headers.set(
          'Set-Cookie',
          `${COOKIE_NAME}=${COOKIE_VALUE}; Path=/missoes; HttpOnly; SameSite=Strict; Max-Age=86400`
        )
        return res
      }
    } catch { /* fallback */ }

    return Response.redirect(new URL(`${pathname}?erro=1`, url.origin), 302)
  }

  // Exibe formulário de senha
  const dest = pathname
  const error = url.searchParams.has('erro')

  return new Response(
    `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Deus em Musgo — Missões</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: #1a1a2e;
      color: #e0e0e0;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
    }
    .card {
      background: #16213e;
      border: 1px solid #0f3460;
      border-radius: 12px;
      padding: 2.5rem;
      width: 100%;
      max-width: 400px;
      text-align: center;
    }
    h1 { font-size: 1.5rem; margin-bottom: 0.25rem; color: #e94560; }
    .sub { color: #a0a0b0; margin-bottom: 1.5rem; font-size: 0.85rem; }
    input[type="password"] {
      width: 100%;
      padding: 0.75rem 1rem;
      background: #0f3460;
      border: 1px solid #1a4a7a;
      border-radius: 8px;
      color: #e0e0e0;
      font-size: 1rem;
      outline: none;
      transition: border-color 0.2s;
    }
    input[type="password"]:focus { border-color: #e94560; }
    button {
      margin-top: 1rem;
      width: 100%;
      padding: 0.75rem 1rem;
      background: #e94560;
      border: none;
      border-radius: 8px;
      color: #fff;
      font-size: 1rem;
      cursor: pointer;
      font-weight: 600;
      transition: background 0.2s;
    }
    button:hover { background: #d63851; }
    .erro {
      background: rgba(233, 69, 96, 0.15);
      color: #e94560;
      padding: 0.5rem;
      border-radius: 6px;
      margin-bottom: 1rem;
      font-size: 0.85rem;
    }
  </style>
</head>
<body>
  <div class="card">
    <h1>🔒 Missões</h1>
    <p class="sub">Área do Mestre. Digite a senha pra continuar.</p>
    ${error ? '<div class="erro">Senha incorreta. Tente novamente.</div>' : ''}
    <form method="POST" action="${pathname}">
      <input type="hidden" name="dest" value="${dest}">
      <input type="password" name="password" placeholder="Senha" autofocus>
      <button type="submit">Entrar</button>
    </form>
  </div>
</body>
</html>`,
    {
      status: 401,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'no-store',
      },
    },
  )
}
