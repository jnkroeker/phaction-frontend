export async function fetchTasks(): Promise<any[]> {
  const res = await fetch('http://35.186.185.172:80/', {
    mode: "no-cors",
  })
  return await res.json() as Promise<any[]>
}