export type Trace = {
  fl: string
  h: string
  ip: string
  ts: string
  visit_scheme: string
  uag: string
  colo: string
  sliver: string
  http: string
  loc: string
  tls: string
  sni: string
  warp: 'on' | 'off'
  gateway: 'on' | 'off'
  rbi: 'on' | 'off'
  kex: string
}

export async function fetchTrace(): Promise<Trace> {
  const res = await fetch('https://1.1.1.1/cdn-cgi/trace')

  let str = await res.text()

  if (str.at(-1) === '\n') {
    str = str.slice(0, -1)
  }

  const arr = str.split('\n')

  const obj: Record<string, string> = {}

  for (let i = 0; i < arr.length; i++) {
    obj[arr[i].split('=')[0]] = arr[i].split('=')[1]
  }

  return obj as Trace
}
