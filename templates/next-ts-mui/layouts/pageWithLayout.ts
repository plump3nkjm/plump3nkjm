/*
@see https://alexjohnsuarez.medium.com/next-js-multiple-layouts-patterns-with-typescript-b3b8385a8c4
* */
import { NextPage } from 'next'
import type { ReactElement } from 'react'
import MainLayout from './CommonLayout'
import AdminLayout from './AdminLayout'
import EmptyLayout from './EmptyLayout'

export type PageWithMainLayoutType = NextPage & { layout: typeof MainLayout }
export type PageWithAdminLayoutType = NextPage & { layout: typeof AdminLayout }
export type PageWithEmptyLayoutType = NextPage & { layout: typeof EmptyLayout }
export type PageWithLayoutType = PageWithMainLayoutType | PageWithAdminLayoutType | PageWithEmptyLayoutType
export type LayoutProps = ({children}: { children: ReactElement }) => ReactElement

export default PageWithLayoutType