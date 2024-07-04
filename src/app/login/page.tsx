import AppleIcon from '@/assets/icons/apple.svg'
import GoogleIcon from '@/assets/icons/google.svg'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'

const LoginScreen = () => {
  return (
    <div className="sm:w-[400px] sm:px-0 w-full px-5 h-full mx-auto flex flex-col items-center flex-grow">
      <h1 className="mt-[72px] sm:text-[44px] text-2xl font-semibold text-center text-gray-12">
        Welcome back
      </h1>
      <h2 className="mt-6 text-base xs:text-sm text-center opacity-50 font-medium">
        Create an account and start for free
        <br />
        Log in to your account below
      </h2>
      <div className="flex flex-col gap-3 w-full mt-12">
        <Button className="bg-white text-black hover:bg-white/50">
          <GoogleIcon width="24" height="24" className="mr-2" /> Continue with Google
        </Button>
        <Button className="bg-black text-white hover:bg-black/75">
          <AppleIcon width="24" height="24" className="mr-2" /> Continue with Apple
        </Button>
      </div>
      <p className="my-8 text-[14px] text-center text-gray-9 font-medium">Or continue with email</p>
      <div className="w-full flex flex-col gap-4">
        <Input
          type="email"
          className="bg-white text-[15px] shadow-sm"
          placeholder="Enter your email address..."
        />
        <Button>Continue with email</Button>
      </div>
      <p className="mt-12 flex gap-1 text-sm xs:text-xs text-center text-gray-10 font-medium">
        🔗 We&apos;ll email you a magic code to log in password-free
      </p>
      <p className="mt-auto mb-4 pt-4 text-xs text-center opacity-50">
        By continuing you acknowledge and accept
        <br />
        Manifest&apos;s{' '}
        <Link href="#" className="underline">
          Terms & Conditions
        </Link>{' '}
        and{' '}
        <Link href="#" className="underline">
          Privacy Policy
        </Link>
      </p>
    </div>
  )
}

export default LoginScreen
