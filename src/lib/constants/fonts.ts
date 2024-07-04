import { Inter as FontSans } from 'next/font/google'
import localFont from 'next/font/local'

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const fontAntiqueOlive = localFont({
  src: [
    {
      path: '../../../public/assets/fonts/antique-olive-std/Antique-Olive-Std-Light_3866.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../../public/assets/fonts/antique-olive-std/Antique-Olive-Std-Roman_3869.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../public/assets/fonts/antique-olive-std/Antique-Olive-Std-Italic_3865.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../../public/assets/fonts/antique-olive-std/Antique-Olive-Std-Bold_3863.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../../public/assets/fonts/antique-olive-std/Antique-Olive-Std-Black_3861.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../../public/assets/fonts/antique-olive-std/Antique-Olive-Std-Bold-Condensed_3862.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../../public/assets/fonts/antique-olive-std/Antique-Olive-Std-Compact_3864.ttf',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../../../public/assets/fonts/antique-olive-std/Antique-Olive-Std-Nord_3868.ttf',
      weight: '1000',
      style: 'normal',
    },
    {
      path: '../../../public/assets/fonts/antique-olive-std/Antique-Olive-Std-Nord-Italic_3867.ttf',
      weight: '1000',
      style: 'italic',
    },
  ],
  variable: '--font-antique-olive',
})

export const fontLabGrotesque = localFont({
  src: [
    {
      path: '../../../public/assets/fonts/lab-grotesque/LabGrotesqueLight.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../../public/assets/fonts/lab-grotesque/LabGrotesqueLightItalic.otf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../../../public/assets/fonts/lab-grotesque/LabGrotesqueRegular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../public/assets/fonts/lab-grotesque/LabGrotesqueItalic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../../public/assets/fonts/lab-grotesque/LabGrotesqueMedium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../../public/assets/fonts/lab-grotesque/LabGrotesqueMediumItalic.otf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../../../public/assets/fonts/lab-grotesque/LabGrotesqueBold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../../public/assets/fonts/lab-grotesque/LabGrotesqueBlackItalic.otf',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../../../public/assets/fonts/lab-grotesque/LabGrotesqueBlack.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../../public/assets/fonts/lab-grotesque/LabGrotesqueBlackItalic.otf',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-lab-grotesque',
})
