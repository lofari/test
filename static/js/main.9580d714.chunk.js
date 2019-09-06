(window.webpackJsonpclient = window.webpackJsonpclient || []).push([
  [0],
  {
    117: function(e, t, n) {
      e.exports = n(245);
    },
    245: function(e, t, n) {
      "use strict";
      n.r(t);
      var r = n(0),
        a = n.n(r),
        c = n(32),
        i = n.n(c),
        o = n(11),
        s = n(10),
        u = n(111),
        l = n(28),
        m = n(2),
        p = n(1),
        d = n(8),
        h = n(6),
        f = n(9),
        b = n(25),
        v = n(22),
        y = n.n(v),
        O = n(37),
        E = n(112),
        g = n.n(E).a.create({ baseURL: "http://localhost:3001" }),
        j = n(16),
        S = Object(j.a)();
      function w(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function k(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? w(n, !0).forEach(function(t) {
                Object(b.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : w(n).forEach(function(t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var I = function(e) {
          return (function() {
            var t = Object(O.a)(
              y.a.mark(function t(n) {
                var r;
                return y.a.wrap(function(t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.next = 2), g.get("/streams/".concat(e));
                      case 2:
                        (r = t.sent),
                          n({ type: "FETCH_STREAM", payload: r.data });
                      case 4:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            );
            return function(e) {
              return t.apply(this, arguments);
            };
          })();
        },
        N = n(247),
        C = n(246),
        P = (function(e) {
          function t() {
            var e, n;
            Object(m.a)(this, t);
            for (var r = arguments.length, c = new Array(r), i = 0; i < r; i++)
              c[i] = arguments[i];
            return (
              ((n = Object(d.a)(
                this,
                (e = Object(h.a)(t)).call.apply(e, [this].concat(c))
              )).renderInput = function(e) {
                var t = e.input,
                  r = e.label,
                  c = e.meta,
                  i = "field ".concat(c.error && c.touched ? "error" : "", " ");
                return a.a.createElement(
                  "div",
                  { className: i },
                  a.a.createElement("label", null, r),
                  a.a.createElement(
                    "input",
                    Object.assign({}, t, { autoComplete: "off" })
                  ),
                  n.renderError(c)
                );
              }),
              (n.onSubmit = function(e) {
                n.props.onSubmit(e);
              }),
              n
            );
          }
          return (
            Object(f.a)(t, e),
            Object(p.a)(t, [
              {
                key: "renderError",
                value: function(e) {
                  var t = e.error;
                  if (e.touched && t)
                    return a.a.createElement(
                      "div",
                      { className: "ui error message" },
                      a.a.createElement("div", { className: "header" }, t)
                    );
                }
              },
              {
                key: "render",
                value: function() {
                  return a.a.createElement(
                    "form",
                    {
                      onSubmit: this.props.handleSubmit(this.onSubmit),
                      className: "ui form error"
                    },
                    a.a.createElement(N.a, {
                      name: "title",
                      component: this.renderInput,
                      label: "Enter Title"
                    }),
                    a.a.createElement(N.a, {
                      name: "description",
                      component: this.renderInput,
                      label: "Enter Description"
                    }),
                    a.a.createElement(
                      "button",
                      { className: "ui button primary" },
                      "Submit"
                    )
                  );
                }
              }
            ]),
            t
          );
        })(a.a.Component),
        A = Object(C.a)({
          form: "streamForm",
          validate: function(e) {
            var t = {};
            return (
              e.title || (t.title = "You must enter a title"),
              e.description || (t.description = "You must enter a description"),
              t
            );
          }
        })(P),
        D = (function(e) {
          function t() {
            var e, n;
            Object(m.a)(this, t);
            for (var r = arguments.length, a = new Array(r), c = 0; c < r; c++)
              a[c] = arguments[c];
            return (
              ((n = Object(d.a)(
                this,
                (e = Object(h.a)(t)).call.apply(e, [this].concat(a))
              )).onSubmit = function(e) {
                n.props.createStream(e);
              }),
              n
            );
          }
          return (
            Object(f.a)(t, e),
            Object(p.a)(t, [
              {
                key: "render",
                value: function() {
                  return a.a.createElement(
                    "div",
                    null,
                    a.a.createElement("h3", null, "Create a Stream"),
                    a.a.createElement(A, { onSubmit: this.onSubmit })
                  );
                }
              }
            ]),
            t
          );
        })(a.a.Component),
        T = Object(o.b)(null, {
          createStream: function(e) {
            return (function() {
              var t = Object(O.a)(
                y.a.mark(function t(n, r) {
                  var a, c;
                  return y.a.wrap(function(t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (a = r().auth.userId),
                            (t.next = 3),
                            g.post("/streams", k({}, e, { userId: a }))
                          );
                        case 3:
                          (c = t.sent),
                            n({ type: "CREATE_STREAM", payload: c.data }),
                            S.push("/");
                        case 6:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              );
              return function(e, n) {
                return t.apply(this, arguments);
              };
            })();
          }
        })(D),
        _ = function(e) {
          return i.a.createPortal(
            a.a.createElement(
              "div",
              {
                onClick: e.onDismiss,
                className: "ui dimmer modals visible active"
              },
              a.a.createElement(
                "div",
                {
                  onClick: function(e) {
                    return e.stopPropagation();
                  },
                  className: "ui standard modal visible active"
                },
                a.a.createElement("div", { className: "header" }, e.title),
                a.a.createElement("div", { className: "content" }, e.content),
                a.a.createElement("div", { className: "actions" }, e.actions)
              )
            ),
            document.querySelector("#modal")
          );
        },
        R = n(20),
        x = (function(e) {
          function t() {
            return (
              Object(m.a)(this, t),
              Object(d.a)(this, Object(h.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(f.a)(t, e),
            Object(p.a)(t, [
              {
                key: "componentDidMount",
                value: function() {
                  this.props.fetchStream(this.props.match.params.id);
                }
              },
              {
                key: "renderActions",
                value: function() {
                  var e = this,
                    t = this.props.match.params.id;
                  return a.a.createElement(
                    a.a.Fragment,
                    null,
                    a.a.createElement(
                      "button",
                      {
                        onClick: function() {
                          return e.props.deleteStream(t);
                        },
                        className: "ui button negative"
                      },
                      "Delete"
                    ),
                    a.a.createElement(
                      R.a,
                      { to: "/", className: "ui button" },
                      "Cancel"
                    )
                  );
                }
              },
              {
                key: "renderContent",
                value: function() {
                  return this.props.stream
                    ? "Are you sure you want to delete the stream: ".concat(
                        this.props.stream.title,
                        " ?"
                      )
                    : "Are you sure you want to delete this stream?";
                }
              },
              {
                key: "render",
                value: function() {
                  return a.a.createElement(_, {
                    title: "Delete Stream",
                    content: this.renderContent(),
                    actions: this.renderActions(),
                    onDismiss: function() {
                      return S.push("/");
                    }
                  });
                }
              }
            ]),
            t
          );
        })(a.a.Component),
        M = Object(o.b)(
          function(e, t) {
            return { stream: e.streams[t.match.params.id] };
          },
          {
            fetchStream: I,
            deleteStream: function(e) {
              return (function() {
                var t = Object(O.a)(
                  y.a.mark(function t(n) {
                    return y.a.wrap(function(t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2), g.delete("/streams/".concat(e))
                            );
                          case 2:
                            n({ type: "DELETE_STREAM", payload: e }),
                              S.push("/");
                          case 4:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                );
                return function(e) {
                  return t.apply(this, arguments);
                };
              })();
            }
          }
        )(x),
        L = n(46),
        U = n.n(L),
        F = (function(e) {
          function t() {
            var e, n;
            Object(m.a)(this, t);
            for (var r = arguments.length, a = new Array(r), c = 0; c < r; c++)
              a[c] = arguments[c];
            return (
              ((n = Object(d.a)(
                this,
                (e = Object(h.a)(t)).call.apply(e, [this].concat(a))
              )).onSubmit = function(e) {
                n.props.editStream(n.props.match.params.id, e);
              }),
              n
            );
          }
          return (
            Object(f.a)(t, e),
            Object(p.a)(t, [
              {
                key: "componentDidMount",
                value: function() {
                  this.props.fetchStream(this.props.match.params.id);
                }
              },
              {
                key: "render",
                value: function() {
                  return this.props.stream
                    ? a.a.createElement(
                        "div",
                        null,
                        a.a.createElement("h3", null, "Edit a stream"),
                        a.a.createElement(A, {
                          initialValues: U.a.pick(
                            this.props.stream,
                            "title",
                            "description"
                          ),
                          onSubmit: this.onSubmit
                        })
                      )
                    : a.a.createElement("div", null, "Loading...");
                }
              }
            ]),
            t
          );
        })(a.a.Component),
        G = Object(o.b)(
          function(e, t) {
            return { stream: e.streams[t.match.params.id] };
          },
          {
            fetchStream: I,
            editStream: function(e, t) {
              return (function() {
                var n = Object(O.a)(
                  y.a.mark(function n(r) {
                    var a;
                    return y.a.wrap(function(n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (n.next = 2), g.patch("/streams/".concat(e), t)
                            );
                          case 2:
                            (a = n.sent),
                              r({ type: "EDIT_STREAM", payload: a.data }),
                              S.push("/");
                          case 5:
                          case "end":
                            return n.stop();
                        }
                    }, n);
                  })
                );
                return function(e) {
                  return n.apply(this, arguments);
                };
              })();
            }
          }
        )(F),
        H = (function(e) {
          function t() {
            return (
              Object(m.a)(this, t),
              Object(d.a)(this, Object(h.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(f.a)(t, e),
            Object(p.a)(t, [
              {
                key: "componentDidMount",
                value: function() {
                  this.props.fetchStreams();
                }
              },
              {
                key: "renderAdmin",
                value: function(e) {
                  if (e.userId === this.props.currentUserId)
                    return a.a.createElement(
                      "div",
                      { className: "right floated content" },
                      a.a.createElement(
                        R.a,
                        {
                          to: "/streams/edit/".concat(e.id),
                          className: "ui button primary"
                        },
                        "Edit"
                      ),
                      a.a.createElement(
                        R.a,
                        {
                          to: "/streams/delete/".concat(e.id),
                          className: "ui button negative"
                        },
                        "Delete"
                      )
                    );
                }
              },
              {
                key: "renderList",
                value: function() {
                  var e = this;
                  return this.props.streams.map(function(t) {
                    return a.a.createElement(
                      "div",
                      { className: "item", key: t.id },
                      e.renderAdmin(t),
                      a.a.createElement("i", {
                        className:
                          "large middle aligned icon chevron circle right"
                      }),
                      a.a.createElement(
                        "div",
                        { className: "content" },
                        a.a.createElement(
                          R.a,
                          { to: "/streams/".concat(t.id) },
                          t.title
                        ),
                        a.a.createElement(
                          "div",
                          { className: "description" },
                          t.description
                        )
                      )
                    );
                  });
                }
              },
              {
                key: "renderCreate",
                value: function() {
                  if (this.props.isSignedIn)
                    return a.a.createElement(
                      "div",
                      { style: { textAlign: "right" } },
                      a.a.createElement(
                        R.a,
                        { to: "/streams/new", className: "ui button primary" },
                        "Create Stream"
                      )
                    );
                }
              },
              {
                key: "render",
                value: function() {
                  return a.a.createElement(
                    "div",
                    null,
                    a.a.createElement("h2", null, "Streams"),
                    a.a.createElement(
                      "div",
                      { className: "ui celled list" },
                      this.renderList()
                    ),
                    this.renderCreate()
                  );
                }
              }
            ]),
            t
          );
        })(a.a.Component),
        q = Object(o.b)(
          function(e) {
            return {
              streams: Object.values(e.streams),
              currentUserId: e.auth.userId,
              isSignedIn: e.auth.isSignedIn
            };
          },
          {
            fetchStreams: function() {
              return (function() {
                var e = Object(O.a)(
                  y.a.mark(function e(t) {
                    var n;
                    return y.a.wrap(function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), g.get("/streams");
                          case 2:
                            (n = e.sent),
                              t({ type: "FETCH_STREAMS", payload: n.data });
                          case 4:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function(t) {
                  return e.apply(this, arguments);
                };
              })();
            }
          }
        )(H),
        B = n(115),
        J = (function(e) {
          function t(e) {
            var n;
            return (
              Object(m.a)(this, t),
              ((n = Object(d.a)(
                this,
                Object(h.a)(t).call(this, e)
              )).videoRef = a.a.createRef()),
              n
            );
          }
          return (
            Object(f.a)(t, e),
            Object(p.a)(t, [
              {
                key: "componentDidMount",
                value: function() {
                  var e = this.props.match.params.id;
                  this.props.fetchStream(e), this.buildPlayer();
                }
              },
              {
                key: "componentDidUpdate",
                value: function() {
                  this.buildPlayer();
                }
              },
              {
                key: "buildPlayer",
                value: function() {
                  if (!this.player && this.props.stream) {
                    var e = this.props.match.params.id;
                    (this.player = B.a.createPlayer({
                      type: "flv",
                      url: "http://localhost:8000/live/".concat(e, ".flv")
                    })),
                      this.player.attachMediaElement(this.videoRef.current),
                      this.player.load();
                  }
                }
              },
              {
                key: "render",
                value: function() {
                  if (!this.props.stream)
                    return a.a.createElement("div", null, "Loading...");
                  var e = this.props.stream,
                    t = e.title,
                    n = e.description;
                  return a.a.createElement(
                    "div",
                    null,
                    a.a.createElement("video", {
                      ref: this.videoRef,
                      style: { width: "100%" },
                      controls: !0
                    }),
                    a.a.createElement("h1", null, t),
                    a.a.createElement("h5", null, n)
                  );
                }
              }
            ]),
            t
          );
        })(a.a.Component),
        V = Object(o.b)(
          function(e, t) {
            return { stream: e.streams[t.match.params.id] };
          },
          { fetchStream: I }
        )(J),
        X = (function(e) {
          function t() {
            var e, n;
            Object(m.a)(this, t);
            for (var r = arguments.length, a = new Array(r), c = 0; c < r; c++)
              a[c] = arguments[c];
            return (
              ((n = Object(d.a)(
                this,
                (e = Object(h.a)(t)).call.apply(e, [this].concat(a))
              )).onAuthChange = function(e) {
                e
                  ? n.props.signIn(n.auth.currentUser.get().getId())
                  : n.props.signOut();
              }),
              (n.onSignInClick = function() {
                n.auth.signIn();
              }),
              (n.onSignOutClick = function() {
                n.auth.signOut();
              }),
              n
            );
          }
          return (
            Object(f.a)(t, e),
            Object(p.a)(t, [
              {
                key: "componentDidMount",
                value: function() {
                  var e = this;
                  window.gapi.load("client:auth2", function() {
                    window.gapi.client
                      .init({
                        clientId:
                          "195058232374-5e9nkkcase9cv3fnntnic36v5gdb9b23.apps.googleusercontent.com",
                        scope: "email"
                      })
                      .then(function() {
                        (e.auth = window.gapi.auth2.getAuthInstance()),
                          e.onAuthChange(e.auth.isSignedIn.get()),
                          e.auth.isSignedIn.listen(e.onAuthChange);
                      });
                  });
                }
              },
              {
                key: "renderAuthButton",
                value: function() {
                  return null === this.props.isSignedIn
                    ? null
                    : this.props.isSignedIn
                    ? a.a.createElement(
                        "button",
                        {
                          onClick: this.onSignOutClick,
                          className: "ui red google button"
                        },
                        a.a.createElement("i", { className: "google icon" }),
                        "Sign Out"
                      )
                    : a.a.createElement(
                        "button",
                        {
                          onClick: this.onSignInClick,
                          className: "ui red google button"
                        },
                        a.a.createElement("i", { className: "google icon" }),
                        "Sign In With Google"
                      );
                }
              },
              {
                key: "render",
                value: function() {
                  return a.a.createElement(
                    "div",
                    null,
                    this.renderAuthButton()
                  );
                }
              }
            ]),
            t
          );
        })(a.a.Component),
        Y = Object(o.b)(
          function(e) {
            return { isSignedIn: e.auth.isSignedIn };
          },
          {
            signIn: function(e) {
              return { type: "SIGN_IN", payload: e };
            },
            signOut: function() {
              return { type: "SIGN_OUT" };
            }
          }
        )(X),
        K = function() {
          return a.a.createElement(
            "div",
            { className: "ui secondaty pointing menu" },
            a.a.createElement(R.a, { to: "/", className: "item" }, "Streamy"),
            a.a.createElement(
              "div",
              { className: "right menu" },
              a.a.createElement(
                R.a,
                { to: "/", className: "item" },
                "All Streams"
              ),
              a.a.createElement(Y, null)
            )
          );
        },
        W = function() {
          return a.a.createElement(
            "div",
            { className: "ui container" },
            a.a.createElement(
              l.b,
              { history: S },
              a.a.createElement(
                "div",
                null,
                a.a.createElement(K, null),
                a.a.createElement(
                  l.c,
                  null,
                  a.a.createElement(l.a, {
                    path: "/",
                    exact: !0,
                    component: q
                  }),
                  a.a.createElement(l.a, {
                    path: "/streams/new",
                    exact: !0,
                    component: T
                  }),
                  a.a.createElement(l.a, {
                    path: "/streams/edit/:id",
                    exact: !0,
                    component: G
                  }),
                  a.a.createElement(l.a, {
                    path: "/streams/delete/:id",
                    exact: !0,
                    component: M
                  }),
                  a.a.createElement(l.a, {
                    path: "/streams/:id",
                    exact: !0,
                    component: V
                  })
                )
              )
            )
          );
        },
        z = n(248);
      function Q(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Z(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Q(n, !0).forEach(function(t) {
                Object(b.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Q(n).forEach(function(t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var $ = { isSignedIn: null, userId: null };
      function ee(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function te(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ee(n, !0).forEach(function(t) {
                Object(b.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ee(n).forEach(function(t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var ne = Object(s.c)({
          auth: function() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : $,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "SIGN_IN":
                return Z({}, e, { isSignedIn: !0, userId: t.payload });
              case "SIGN_OUT":
                return Z({}, e, { isSignedIn: !1, userId: t.payload });
              default:
                return e;
            }
          },
          form: z.a,
          streams: function() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "FETCH_STREAMS":
                return te({}, e, {}, U.a.mapKeys(t.payload, "id"));
              case "FETCH_STREAM":
              case "CREATE_STREAM":
                return te({}, e, Object(b.a)({}, t.payload.id, t.payload));
              case "DELETE_STREAM":
                return U.a.omit(e, t.payload);
              case "EDIT_STREAM":
                return te({}, e, Object(b.a)({}, t.payload.id, t.payload));
              default:
                return e;
            }
          }
        }),
        re = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || s.d,
        ae = Object(s.e)(ne, re(Object(s.a)(u.a)));
      i.a.render(
        a.a.createElement(o.a, { store: ae }, a.a.createElement(W, null)),
        document.querySelector("#root")
      );
    }
  },
  [[117, 1, 2]]
]);
//# sourceMappingURL=main.9580d714.chunk.js.map
