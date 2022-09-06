import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <a href="/test/registrationUserForm">ユーザ登録</a><br></br>
      <a href="/test/loginForm">ユーザログイン</a><br></br>
      <a href="/test/getUserDataForm">ユーザデータ取得</a><br></br>
      <a href="/test/updateUserDataForm">ユーザデータ更新</a><br></br>
      <a href="/test/getActorListForm">ユーザリスト取得</a><br></br>
      <a href="/test/searchActorsForm">ユーザ検索</a><br></br>
    </>
  )
}
