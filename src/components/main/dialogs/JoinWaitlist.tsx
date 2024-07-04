import { useEffect, useState } from 'react'

import { Loader2 } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { DialogClose, DialogContent } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { toast } from '@/components/ui/use-toast'
import { useJoinWaitlist } from '@/hooks/apis/useJoinWaitlist'

const JoinWaitlist = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const {
    data: response,
    mutate: joinWaitlist,
    isError: responseError,
    isLoading: isWaitingResponse,
    isSuccess: responseSuccess,
  } = useJoinWaitlist()

  const handleJoinWaitlist = () => {
    joinWaitlist({ name, email })
  }

  useEffect(() => {
    if (responseError) {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: 'There was a problem with your request.',
      })
    }
  }, [responseError])

  useEffect(() => {
    if (responseSuccess) {
      if (response.invited === true) {
        toast({
          variant: 'default',
          description: 'You have already get invited to Manifest AI.',
        })
      } else {
        toast({
          variant: 'default',
          title: 'Congratulations!',
          description: 'You are on the waitlist now.',
        })
      }
    }
  }, [responseSuccess])

  return (
    <DialogContent className="p-0 border-none sm:max-w-[425px]">
      <Card>
        <CardHeader>
          <CardTitle>Join waitlist</CardTitle>
          <CardDescription>
            Shuttle makes collaborating easy. Simply drag, drop and add your brand.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={name}
                  placeholder="Aksel Allouch"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Email</Label>
                <Input
                  id="email"
                  value={email}
                  placeholder="aksel.allouch@gmail.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button disabled={isWaitingResponse} onClick={handleJoinWaitlist}>
            {isWaitingResponse ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Please wait
              </>
            ) : (
              'Join waitlist'
            )}
          </Button>
        </CardFooter>
      </Card>
    </DialogContent>
  )
}

export default JoinWaitlist
