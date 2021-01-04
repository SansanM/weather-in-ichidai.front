/* eslint-disable */
import { AspidaClient, BasicHeaders, dataToURLString } from "aspida"
import { Methods as Methods0 } from "./weather"

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? "http://localhost:3000" : baseURL).replace(/\/$/, "")
  const PATH0 = "/weather"
  const GET = "GET"

  return {
    weather: {
      get: (option?: { query?: Methods0["get"]["query"]; config?: T }) =>
        fetch<Methods0["get"]["resBody"], BasicHeaders, Methods0["get"]["status"]>(
          prefix,
          PATH0,
          GET,
          option
        ).json(),
      $get: (option?: { query?: Methods0["get"]["query"]; config?: T }) =>
        fetch<Methods0["get"]["resBody"], BasicHeaders, Methods0["get"]["status"]>(
          prefix,
          PATH0,
          GET,
          option
        )
          .json()
          .then((r) => r.body),
      $path: (option?: { method?: "get"; query: Methods0["get"]["query"] }) =>
        `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ""}`
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
