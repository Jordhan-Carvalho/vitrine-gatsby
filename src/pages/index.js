import React from 'react'
import { Typography } from 'antd'
import LandingLayout from '@layouts/LandingLayout'

export default () => (
  <LandingLayout>
    <div className='flex flex-col items-center'>
      <Typography.Title className='text-primary-color'>
        Vitrine Virtual, joga lá no Vitrine!
      </Typography.Title>
      <Typography.Title level={4} className='text-gray-600'>
        Plataforma de compra e venda de produtos novos e usados, além de
        catálogo de prestação de serviços na região oeste da bahia (Barreiras e
        Luis Eduardo Magalhães).
      </Typography.Title>
      <a
        href='https://play.google.com/store/apps/details?id=dev.jordhan.vitrine'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img src='/AndroidGooglePlay.png' alt='logo' className='mt-10' />
      </a>
    </div>
  </LandingLayout>
)
