import { isAxiosError } from 'axios'

import apiManager from '@/helpers/api.manager'
import { WAITLIST_API_URL } from '@/lib/constants/apis'

const joinWaitlist = async ({
  name,
  email,
}: {
  name: string
  email: string
}): Promise<Chat | undefined> => {
  try {
    const res = await apiManager.post(
      `${WAITLIST_API_URL}`,
      { name, email },
      {
        headers: { 'Content-Type': 'application/json' },
      },
    )
    if (isAxiosError(res)) {
      return Promise.reject(res)
    }
    return Promise.resolve(res.data)
  } catch (e) {
    return Promise.reject(e)
  }
}

export default joinWaitlist
