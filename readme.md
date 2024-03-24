## cdn-cgi-trace

**cdn-cgi-trace** parses the response from `https://1.1.1.1/cdn-cgi/trace` to JSON.

### Setup

```bash
npm i cdn-cgi-trace
```

```ts
import { fetchTrace } from 'cdn-cgi-trace'
```

### Usage

```ts
const trace = await fetchTrace()
```
