export interface Token {
  access_token: string,
  expires_in: number,
  token_type: string,
  scope: string,
  refresh_token: string
}