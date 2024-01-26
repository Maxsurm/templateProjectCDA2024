import { User } from "./user";

export interface AuthResponse {
    acessToken: string,
    user: User
}
