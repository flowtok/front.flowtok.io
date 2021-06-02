import React from 'react';
import videoMp4 from '../../../assets/login/videos/login_video.mp4';
import videoOgv from '../../../assets/login/videos/login_video.ogv';
import videoWebm from '../../../assets/login/videos/login_video.webm';
import { AuthenticationTemplate } from '../../../components/templates/AuthenticationTemplate';
import { LoginForm } from '../../../components/molecules/Login/LoginForm';

export default () => {
  return (
    <AuthenticationTemplate
      video={{
        mp4: videoMp4,
        ogv: videoOgv,
        webm: videoWebm,
      }}
    >
      <LoginForm />
    </AuthenticationTemplate>
  );
};
