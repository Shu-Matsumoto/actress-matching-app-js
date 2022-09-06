import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Link href="/test/registrationUserForm">
        <a>ユーザ登録</a>
      </Link>
      <br />
      <Link href="/test/loginForm">
        <a>ユーザログイン</a>
      </Link>
      <br />
      <Link href="/test/getUserDataForm">
        <a>ユーザデータ取得</a>
      </Link>
      <br />
      <Link href="/test/updateUserDataForm">
        <a>ユーザデータ更新</a>
      </Link>
      <br />
      <Link href="/test/getActorListForm">
        <a>ユーザリスト取得</a>
      </Link>
      <br />
      <Link href="/test/searchActorsForm">
        <a>ユーザ検索</a>
      </Link>
      <br />
    </>
  )
}
