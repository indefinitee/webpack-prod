import React from 'react'
import {useTranslation} from "react-i18next";

type Props = {}

const AboutPage: React.FC = (props: Props) => {
  const { t } = useTranslation('about');

  return (
    <div>{t('О сайте')}</div>
  )
}

export default AboutPage;