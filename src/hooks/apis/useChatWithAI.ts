import { UseMutationResult, useMutation } from '@tanstack/react-query'

import chatWithAI from '@/actions/chatWithAI'

export interface UseChatWithAIReturn {
  mutate: ({ userMessage }: { userMessage: string }) => Promise<Chat | undefined>
  data: Chat | undefined
  error: Error | null
  isError: boolean
  isLoading: boolean
  isSuccess: boolean
}

export const useChatWithAI = (): UseChatWithAIReturn => {
  const mutation: UseMutationResult<Chat | undefined, Error, { userMessage: string }> = useMutation(
    {
      mutationFn: chatWithAI,
    },
  )

  return {
    mutate: mutation.mutateAsync,
    data: mutation.data,
    error: mutation.error,
    isError: mutation.isError,
    isSuccess: mutation.isSuccess,
    isLoading: mutation.isPending,
  }
}
