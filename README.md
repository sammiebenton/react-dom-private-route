# react-dom-private-route
Only be able to visit certain pages while logged in with google-auth.  If you are not logged in, you will be redirected to your login page. Be sure to include a login page in your web app. Example below
# Usage
You'll need to install google firebase, react, react-router-dom to get this to work properly.
You will also need to fill in your own firebase credentials in the .env file to make this work properly
# Example
  # <AuthProvider>
        ... <LanguageProvider>
          # <Router>
          # <Switch>
            # <PrivateRoute path="/admin" component={Dashboard} />
            # <PrivateRoute path="/update-profile" component={UpdateProfile} />
            # <Route exact path="/" component={HomePage} />
            # <Route path="/signup" component={SignUp} />
            # <Route path="/login" component={LogIn} />
            # <Route path="/forgot-password" component={ForgotPassword} />
          # </Switch>
        # </Router>
        # </LanguageProvider>
      # </AuthProvider>
