import React from 'react'
import { Typography } from 'antd'
import LandingLayout from '@layouts/LandingLayout'

export default () => (
  <LandingLayout>
    <div className='flex flex-col items-center'>
      <Typography.Title className='text-primary-color'>
        Vitrine Virtual, jogá lá no Vitrine!
      </Typography.Title>
      <Typography.Title level={4} className='text-gray-600'>
        Plataforma de compra e venda de produtos usados e novos, além de
        catalogo de prestação de serviços na região oeste da bahia (Barreiras,
        Luis Eduardo Magalhães)
      </Typography.Title>
      <img src='/cover.png' alt='logo' className='mt-10' />
    </div>
  </LandingLayout>
)
