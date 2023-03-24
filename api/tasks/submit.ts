
export async function submitTask(
  url: string
): Promise<Response> {
  return await fetch(`localhost:3000/v1/tasks`, {
    method: "POST",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    body: JSON.stringify({ url })
  })
}
