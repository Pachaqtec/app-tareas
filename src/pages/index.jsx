import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Header from 'layout/Header/index'

import Tasks from './Tasks'
import Others from './Others'
import NotFound from './NotFound'

const Router = () => {
  return (
    <BrowserRouter>
      <Header>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return <Redirect to="/tasks" />
            }}
          />
          <Route path="/tasks">
            <Tasks />
          </Route>
          <Route path="/others">
            <Others />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Header>
    </BrowserRouter>
  )
}

export default Router
