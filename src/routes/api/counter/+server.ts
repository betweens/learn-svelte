let count = 0;

export function GET() {
  count += 1;

  return new Response(
    JSON.stringify({ count }),
    { headers: { 'Content-Type': 'application/json' } }
  );
}
