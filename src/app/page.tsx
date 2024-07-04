'use client'

import Link from 'next/link'

import { useRouter } from 'next/navigation'
import {
  DiscordLogo,
  DribbbleLogo,
  InstagramLogo,
  LinkedinLogo,
  TiktokLogo,
  TwitterLogo,
} from 'phosphor-react'

import LightShortLogo from '@/assets/icons/LightShortLogo'
import JoinWaitlist from '@/components/main/dialogs/JoinWaitlist'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { Separator } from '@/components/ui/separator'

export default function Home() {
  const router = useRouter()

  return (
    <div className="lg:w-[932px] w-full mx-auto px-4 flex flex-col items-center md:gap-[72px] gap-[48px]">
      <div className="mt-[96px] flex flex-col items-center">
        <h1
          className={`lg:w-[720px] w-full md:text-7xl sm:text-5xl text-3xl text-center font-antique font-semibold md:leading-[90px]`}
        >
          Build your AI <br />
          website in minutes
        </h1>
        <p className="sm:w-[484px] w-full mt-6 md:text-xl sm:text-lg text-base text-center font-semibold">
          Designed to help you connect the dots across your content and boost your online presence.
        </p>
        <div className="mt-10 flex gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button>Join Waitlist</Button>
            </DialogTrigger>
            <JoinWaitlist />
          </Dialog>
          <Button
            variant="secondary"
            onClick={() => {
              window.open('https://cal.com/', '_blank')
            }}
          >
            Book Demo
          </Button>
        </div>
      </div>
      <img src="/assets/images/blog-01.png" className="w-full rounded-[30px]" />
      <div className="md:w-[620px] sm:w-[600px] w-full px-4 py-6 md:text-xl sm:text-lg font-medium">
        Manifest is not just another website builder. It&apos;s a revolutionary platform that
        harnesses the power of AI to transform your website into an intelligent, engaging entity.
        <br />
        <br />
        With Manifest, your visitors can interact with your site using natural language, navigating
        seamlessly through intuitive conversations. <br /> <br />
        Say goodbye to static websites and hello to the future of web interactions.
      </div>
      <div className="flex flex-col items-center md:gap-[80px] gap-[48px]">
        <div className="md:w-[620px] sm:w-[600px] w-full px-4 py-6 md:text-xl font-medium">
          <h1 className={`md:text-5xl sm:text-3xl text-lg font-antique font-semibold`}>
            Teach Your AI
          </h1>
          <br />
          Easily upload all of your videos, podcasts, PDFs, blog posts and more and we&apos;ll
          create an accurate clone that talks, thinks, and even sounds just like you.
        </div>
        <img src="/assets/images/blog-02.png" className="w-full rounded-[30px]" />
      </div>
      <div className="flex flex-col items-center md:gap-[80px] gap-[48px]">
        <div className="md:w-[620px] sm:w-[600px] w-full px-4 py-6 md:text-xl font-medium">
          <h1 className={`md:text-5xl sm:text-3xl text-lg font-antique font-semibold`}>
            Design your experience
          </h1>
          <br />
          Choose from our collection of stunning, professional templates or create your own. Our
          intuitive design tools make it easy to craft a unique look and feel.
        </div>
        <img src="/assets/images/blog-03.png" className="w-full rounded-[30px]" />
      </div>
      <div className="flex flex-col items-center md:gap-[80px] gap-[48px]">
        <div className="md:w-[620px] sm:w-[600px] w-full px-4 py-6 md:text-xl font-medium">
          <h1 className={`md:text-5xl sm:text-3xl text-lg font-antique font-semibold`}>
            Go live and update
          </h1>
          <br />
          Go live with a custom domain or use our free hosting. Manifest seamlessly integrates with
          your existing tools and platforms, creating a unified, AI-driven experience.
        </div>
        <img src="/assets/images/blog-04.png" className="w-full rounded-[30px]" />
      </div>
      <div className="flex flex-col items-center md:gap-[80px] gap-[48px]">
        <div className="md:w-[620px] sm:w-[600px] w-full px-4 py-6 md:text-xl font-medium">
          <h1 className={`md:text-5xl sm:text-3xl text-lg font-antique font-semibold`}>
            Personalized responses for each audience member.
          </h1>
        </div>
        <img src="/assets/images/blog-03.png" className="w-full rounded-[30px]" />
      </div>
      <div className="flex flex-col items-center md:gap-[80px] gap-[48px]">
        <div className="md:w-[620px] sm:w-[600px] w-full px-4 py-6 md:text-xl font-medium">
          <h1 className={`md:text-5xl sm:text-3xl text-lg font-antique font-semibold`}>
            Your clone will think and speak like you
          </h1>
        </div>
        <img src="/assets/images/blog-04.png" className="w-full rounded-[30px]" />
      </div>
      <div className="sm:w-[564px] w-full px-4 py-6 flex flex-col items-start sm:gap-[40px] gap-[24px]">
        <div className="flex">
          {new Array(6).fill(0).map((value, index) => (
            <div key={`avatar-${index}`} style={{ marginLeft: index === 0 ? 0 : -12 }}>
              <Avatar className="border-[2px] border-white">
                <AvatarImage src="/assets/images/team/Aksel Allouch - Public.jpeg
                " />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          ))}
        </div>
        <div className="sm:text-xl text-black font-medium">
          Manifest is made by small team of designers and engineers who have built software you love
          at companies like GitHub, Instagram, Stripe, and Facebook.
          <br /> <br /> We&apos;ve raised $2.6m, backed by world-class investors, designers, and
          technologists.
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Join Waitlist</Button>
          </DialogTrigger>
          <JoinWaitlist />
        </Dialog>
      </div>
      <div className="sm:w-[530px] w-full">
        <Separator />
      </div>
      <div className="sm:w-[530px] w-full sm:px-0 px-4 flex flex-col items-start gap-[40px]">
        <LightShortLogo />
        <div className="sm:w-full flex sm:flex-row flex-col sm:items-center sm:justify-between sm:gap-0 gap-2 font-semibold">
          <Link href="/">About</Link>
          <Link href="/">Early access</Link>
          <Link href="/">Changelog</Link>
          <Link href="/">Contact</Link>
          <Link href="/">Status</Link>
          <Link href="/">Privacy</Link>
          <Link href="/">Terms</Link>
        </div>
        <div className="flex items-center gap-4">
          <LinkedinLogo size={24} />
          <InstagramLogo size={24} />
          <TwitterLogo size={24} />
          <TiktokLogo size={24} />
          <DribbbleLogo size={24} />
          <DiscordLogo size={24} />
        </div>
        <p className="text-sm">© 2024 MindManifest Inc</p>
      </div>
      <div
        style={{
          background: 'linear-gradient(180deg, rgba(244, 242, 244, 0.00) 10.53%, #F4F2F4 100%)',
          backdropFilter: 'blur(1px)',
        }}
        className="sticky bottom-0 w-full py-4 flex items-center justify-center"
      >
        <Button variant="outline" className="shadow-lg">
          <span className="text-sm text-black font-medium">
            Talk to me <span className={`text-[#908E96] font-lab font-black`}>[ENTER]</span>
          </span>
        </Button>
      </div>
    </div>
  )
}
