# 명령어
  yarn start
    Starts the development server.

  yarn build
    Bundles the app into static files for production.

  yarn test
    Starts the test runner.

  yarn eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd movieql-client
  yarn start

Happy hacking!


# 1 Setup and project outline
- react routing을 위한 것
~~~
$ yarn add react-router-dom
~~~

- react apollo
~~~
$ yarn add apollo-boost react-apollo graphql-tag graphql --save
~~~

- Apollo Boost : GraphQL 클라이언트를 가지기 위한 셋업을 대신해준다.


# 2 Setting up an Apollo Client
- apollo dev tools : chrome 확장 툴


# 3 Setting up React Router
- App.js -> Router가 된다.


# 4 & 5 Getting data from the GraphQL API
- graphql-tag : 프론트엔드에 graphQL을 작성하는 방법
- react-helmet 설치
~~~
$ yarn add react-helmet
~~~
- apollo : graphQL 클라이언트 관련된 역할 제공
- react-apollo : 리액트에 연결하는 방법을 제공



# 6 Details Route with params
- styled-components, styled-reset, prop-types 설치
~~~
$ yarn add styled-components
$ yarn add styled-reset
$ yarn add prop-types
~~~



# 7 Creating a Query with variables
- 쿼리안에 변수(variable) 넣는 방법에 대한 학습


# 8 Conclusions
- component, read, mount, fetch, set state, loading true, loading false
- cache, fetch, state, loading, error