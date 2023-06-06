import React from 'react';
// import custom components
import PageLayout from '../components/layout/PageLayout';
import ContainerColSec from '../components/layout/ContainerColSec';

//import css
import '../scss/components/_storyBookPage.scss';

const StoryBookPage = () => {
  return (
    <>
      <PageLayout>
        {/* 二欄式頁面 */}

        <ContainerColSec>
          <div className='storybook-container'>
            <h2>Storybooks</h2>
            <h4 className='page-sec-title'>
              === Buttons-元件本身目前沒有製作上下margin，是本表顯示用 ===
            </h4>

            <div className='flex_col_cc comp-container'>
              <button className='button-filled button-lg' type='submit'>
                登入
              </button>
              <button className='button-main-tweet' type='submit'>
                推文
              </button>
              <button className='button-setting-save ' type='submit'>
                儲存
              </button>
              <button className='button-main-tweet-error ' type='submit'>
                推文
              </button>
              <button
                className='button-popular_follower-following '
                type='submit'
              >
                按鈕
              </button>
              <button className='button-popular_follower-follow ' type='submit'>
                按鈕
              </button>
              <button className='button-link' type='submit'>
                取消
              </button>
            </div>
          </div>
        </ContainerColSec>
      </PageLayout>
    </>
  );
};

export default StoryBookPage;
