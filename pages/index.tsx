import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import CreateAdForm from '../components/createAdForm'
import { LocaleSwitcher } from '../components/localeSwitcher'
import { Person } from '../components/person'
import { RegisterForm } from '../components/registerForm'
import styles from '../styles/Home.module.css'

const persons = [{ name: "Yan", age: 17, sex: "Male" }, { name: "Ong", age: 22, sex: "female" }, { name: "Patrick", age: 25, sex: "Male" }]
const Home: NextPage = ({ ads }: any) => {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  console.log(router)

  return (

    <LocaleSwitcher />

  )
}

export default Home
