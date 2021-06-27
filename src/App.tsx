import React, { Suspense } from 'react';
import { useReactiveVar } from '@apollo/client';
import { isRegisteredVar, tokenExistVar } from './api/cache';
import EmojiConvertor from 'emoji-js';

window.emoji = new EmojiConvertor();
window.emoji.replace_mode = 'css';
window.emoji.include_title = true;
window.emoji.img_sets.apple.path =
  'https://api.flowtok.online/emoji-data/img-apple-64/';

const AuthLayout = React.lazy(
  () => import('./components/templates/AuthLayout')
);

const NonAuthLayout = React.lazy(
  () => import('./components/templates/NonAuthLayout')
);

export const App = () => {
  const tokenExist = useReactiveVar(tokenExistVar);
  const isRegistered = useReactiveVar(isRegisteredVar);
  return (
    <div style={{ position: 'relative' }}>
      <Suspense fallback={<div>Loading...</div>}>
        {tokenExist && isRegistered ? <AuthLayout /> : <NonAuthLayout />}
      </Suspense>
    </div>
  );
};
