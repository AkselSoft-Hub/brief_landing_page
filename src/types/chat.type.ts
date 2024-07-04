type Chat = {
  type: string
  content: ChatContent
}

type ChatContent = {
  title?: string
  description?: string
  image?: string
  members?: Array<MemberContent>
  bullets?: Array<string>
  url?: string
}

type MemberContent = {
  name: string
  image: string
  position: string
}

type ChatBlock = {
  user: Chat
  response?: Chat
}
