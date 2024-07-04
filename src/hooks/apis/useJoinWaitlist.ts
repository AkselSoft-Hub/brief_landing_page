import { UseMutationResult, useMutation } from '@tanstack/react-query'

import joinWaitlist from '@/actions/joinWaitlist'

export interface UseJoinWaitlistReturn {
  mutate: ({ name, email }: { name: string; email: string }) => Promise<Chat | undefined>
  data: any | undefined
  error: Error | null
  isError: boolean
  isLoading: boolean
  isSuccess: boolean
}

export const useJoinWaitlist = (): UseJoinWaitlistReturn => {
  const mutation: UseMutationResult<any | undefined, Error, { name: string; email: string }> =
    useMutation({
      mutationFn: joinWaitlist,
    })

  return {
    mutate: mutation.mutateAsync,
    data: mutation.data,
    error: mutation.error,
    isError: mutation.isError,
    isSuccess: mutation.isSuccess,
    isLoading: mutation.isPending,
  }
}
