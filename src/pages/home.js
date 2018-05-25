import React from 'react'
import Style from 'next-styled-css'
import Meta from 'Components/Meta'
import Icon from 'Components/Icon'
import Toolbar from 'Components/Toolbar'
import Preloader from 'Components/Preloader'
import Link from 'next/link'
import s, { sheet } from './home.styl'

const Home = ({ count }) => (
  <div className={s.page}>
    <Style sheet={sheet} />
    <Meta title="Nome" />
    <Toolbar />
    <div className={`${s.banner} ta-center`}>
      <h1 className="heading-1 tw-light tc-white">Home is here 4</h1>
      <p className="ts-large tc-light ">Lorem ipsum dolor iset</p>
      <Link href="/about" as="/about2">
        <a className="btn btn-primary">About</a>
      </Link>
      <br />
      <button className="btn btn-default mt-2">Subscribe with Twitter</button>
    </div>
    <div className="container mt-4 mb-4">
      qweqwe
      <div className="row jc-center">
        <div className="col-md-5">
          <div className="card">
            <div className="p-3 card-item">
              <p className="mb-0">
                Mother’s Day can be a loaded holiday for those of us without moms. On this day every
                year, I am extra aware of not having had a mom for a really long time.
              </p>
            </div>
            <div
              className="card-overflow cover ratio"
              style={{
                backgroundImage:
                  'url(https://78.media.tumblr.com/329b9703c7ab8ad11a9ab463611baa95/tumblr_p81f63pTUh1wt4b1zo1_500.gif)',
              }}
            >
              <span className="ratio-fill" style={{ paddingTop: '50%' }} />
              <div className="ratio-body p-3">
                <button className="btn btn-error float-right">Remove me</button>
              </div>
            </div>
            <div className="p-3">
              <p>
                Mother’s Day can be a loaded holiday for those of us without moms. On this day every
                year, I am extra aware of not having had a mom for a really long time.
              </p>
              <button className="btn btn-primary btn--strong btn--size-small">Like this</button>
              <button className="btn btn-default btn--strong btn--size-small ml-2">Cancel</button>
            </div>
            <div className="bg-grey card-item">
              <div className="p-3">
                <div className="media">
                  <div className={`${s.avatar} mr-2`} />
                  <div className="media-body">
                    <div>
                      <a href="/" className="tw-semibold ts-small">
                        John doe
                      </a>
                      <p className="mb-0 ts-small">
                        Fuse introduces UX Markup, a declarative-reactive XML-based language for
                        creating native, responsive and smoothly animated interactive components for
                        iOS and Android. UX is easy to learn, fun to write and incredibly powerful.
                      </p>
                    </div>

                    <div className="media mt-3">
                      <div className={`${s.avatar} mr-2`} />
                      <div className="media-body">
                        <div className="d-flex">
                          <input
                            type="text"
                            className="input input--size-small"
                            placeholder="Type something..."
                          />
                          <button className="btn btn-primary btn--size-small ml-2">Comment</button>
                        </div>
                        <span className="d-block ts-tiny tc-muted mt-1">
                          Pressione ENTER para comentar
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <div className="media mb-4">
            <div
              className={`${s.avatar} mr-2 asf-end rounded-circle cover`}
              style={{
                backgroundImage:
                  'url(https://spectrum-imgp.imgix.net/https%3A%2F%2Flh3.googleusercontent.com%2F-XdUIqdMkCWA%2FAAAAAAAAAAI%2FAAAAAAAAAAA%2F4252rscbv5M%2Fphoto.jpg%3Fsz%3D50?w=128&h=128&ixlib=js-1.1.1&s=ab78aeae9e8abd1ee82df8d1a8aac0ac)',
              }}
            />
            <div className="media-body">
              <a href="#" className="mb-1 ts-tiny tc-muted">
                <span className="tw-semibold">John doe</span> @johndoe
              </a>
              <div className={`${s.bubble} mb-1 p-3`}>
                <p className="mb-0">We would like to share a set of modules</p>
              </div>
              <div className={`${s.bubble} p-3`}>
                <p className="mb-0">
                  We would like to share a set of modules, and as we add more than 1 this will not
                  be a good experience for the devs. We know that we can separate out "core" and
                  build it, and then att it into package.json - but this is even worse experience,
                  since devs want to load the solution and work on various modules and bring up the
                  solution. Makes sense? I really think there may be a way to get this to work in
                  next.config.js but we failed getting config right. We tried several days of
                  trials.
                </p>
              </div>
            </div>
          </div>
          <div className="media">
            <div
              className={`${s.avatar} mr-2 asf-end rounded-circle cover`}
              style={{
                backgroundImage:
                  'url(https://spectrum-imgp.imgix.net/https%3A%2F%2Flh3.googleusercontent.com%2F-XdUIqdMkCWA%2FAAAAAAAAAAI%2FAAAAAAAAAAA%2F4252rscbv5M%2Fphoto.jpg%3Fsz%3D50?w=128&h=128&ixlib=js-1.1.1&s=ab78aeae9e8abd1ee82df8d1a8aac0ac)',
              }}
            />
            <div className="media-body">
              <div className={`${s.bubble} px-3 py-1 float-left`}>
                <Preloader itemClassName="bg-accent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="p-5">
      <h1 className="mb-4">Buttons</h1>
      <div className="mb-3">
        <button className="btn btn-primary mr-1" disabled>
          Primary
        </button>
        <button className="btn btn-primary btn--mute" disabled>
          Do action
        </button>
      </div>
      <div className="mb-4">
        <div className="buttonGroup">
          <button className="btn btn--size-small btn-white btn--strong">SSH</button>
          <button className="btn btn--size-small btn-white btn--strong">
            <Icon name="caret-down" />
          </button>
        </div>
        <button className="btn btn--size-small btn-outline-primary ml-2 tw-normal">
          Inscrever-se para um teste gratuito
        </button>
        <button
          className="btn btn--size-small btn-primary btn--strong ml-2 btn--mute tw-normal"
          disabled
        >
          Inscrever-se para um teste gratuito
        </button>
      </div>
      <h1 className="mb-4">Text</h1>
      <div className="mb-3" />
      <div className="row jc-center">
        <div className="col-md-6">
          <div className="card">
            <div className="p-relative card-item">
              <div className="row mx-0">
                <div className="p-3 col-lg-5 ta-center ta-lg-left">
                  <h4 className="tw-normal ts-large mb-0">Instâncias de VMs</h4>
                </div>
                <div className="col-lg-7 asf-center ta-center ta-lg-right mb-4 mb-lg-0 col-grow">
                  <div className="buttonGroup">
                    <a href="/" className="btn btn-white btn--strong">
                      Edit
                    </a>
                    <a href="/" className="btn btn-white btn--strong">
                      Download
                      <Icon name="cloud-download" className="ml-2" />
                    </a>
                    <button className="btn btn-white btn--strong">
                      <Icon name="caret-down" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-3 card-item">
              <p className="mb-2">
                Inscreva-se para uma avaliação gratuita para começar a usar <br /> o Google Compute
                Engine
              </p>
              <button className="btn btn--size-small btn-primary btn--strong tw-normal mb-1">
                Inscrever-se para um teste gratuito
              </button>
              <br />
              <span className="tc-muted ts-tiny">
                Durante o teste gratuito, o Google não cobrará você sem sua permissão.
              </span>
            </div>
            <div className="ta-center px-3 py-5 bg-accent tc-white card-overflow">
              <h4 className="tw-normal mb-1">Take a note!</h4>
              <p className="tc-light">
                Durante o teste gratuito, o Google não cobrará você sem sua permissão.
              </p>
              <button className="btn btn-white tc-accent btn--size-small">Take this note</button>
            </div>
            <div className="p-3">
              <p className="ts-large tc-error">
                Hello world <span className="badge badge-error">Error</span>
              </p>
              <p>
                Uhuu{' '}
                <button className="btn btn-primary btn--strong btn--size-small tw-normal ml-2 mr-2">
                  Do an inline action
                </button>
                pra voce ver
              </p>
              <p className="mb-0">This is a really good card</p>
            </div>
            <div className="p-3">
              <p className="mb-0">This is a really good card</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card card-list">
            <div className="card-item bg-white action">
              <div className="px-4 py-2">
                <div className="d-flex jc-between w-100">
                  <h5 className="mb-1">Lorem ipsum dolor iset</h5>
                  <small className="tc-muted">3 days ago</small>
                </div>
                <p className="mb-1">
                  Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus
                  varius blandit.
                </p>
                <small className="tc-muted">Donec id elit non mi porta.</small>
              </div>
            </div>
            <div className="card-item bg-primary tc-white active">
              <div className="px-4 py-2">
                <div className="d-flex jc-between w-100">
                  <h5 className="mb-1">Lorem ipsum dolor iset</h5>
                  <small className="tc-muted">3 days ago</small>
                </div>
                <p className="mb-1">
                  Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus
                  varius blandit.
                </p>
                <small className="tc-muted">Donec id elit non mi porta.</small>
              </div>
            </div>
            <div className="card-item bg-white action">
              <div className="px-4 py-2">
                <div className="d-flex jc-between w-100">
                  <h5 className="mb-1">Lorem ipsum dolor iset</h5>
                  <small className="tc-muted">3 days ago</small>
                </div>
                <p className="mb-1">
                  Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus
                  varius blandit.
                </p>
                <small className="tc-muted">Donec id elit non mi porta.</small>
              </div>
            </div>
            <div className="card-item bg-white action">
              <div className="px-4 py-2">
                <div className="d-flex jc-between w-100">
                  <h5 className="mb-1">List group item heading</h5>
                  <small className="tc-muted">3 days ago</small>
                </div>
                <p className="mb-1">
                  Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus
                  varius blandit.
                </p>
                <small className="tc-muted">Donec id elit non mi porta.</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

Home.getInitialProps = () => ({ count: 8 })

Home.displayName = 'Home'

export default Home
