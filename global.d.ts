interface RandomResponse {
    icon_url: string
    categories: Array<string>
    id: string
    url: string
    value: string
    created_at: string
}

interface IStatus {
    isLoading: boolean,
    isError: boolean
}
type Categories = string[]
type Status = "Loading" | "Complated" | "Error" | null 