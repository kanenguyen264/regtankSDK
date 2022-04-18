import React from "react";
import withLocalIntl from "../../../src/UI/withLocalIntl";
import PageHeading from "../../../src/UI/PageHeading";
import Link from "../../../src/UI/Link/Link";
import { Route, Switch } from "react-router";
import { compose } from "recompose";

const PageHeadingCustomUrlResolverExample = compose(
  withLocalIntl({
    "en-US": {
      "url.ex": "Example",
    },
  }),
  (Component) => (props) => (
    <Switch>
      <Route path={["/ex/:code", "/"]}>
        <Component {...props} />
      </Route>
    </Switch>
  ),
)(function PageHeadingCustomUrlResolverExample() {
  return (
    <>
      <PageHeading
        title={"Example"}
        customUrlResolver={(index, sub) => {
          if (index === 1)
            return {
              a: "Foo",
              b: "Bar",
            }[sub];
        }}
      />
      <div>
        <Link to={"/ex/a"}>Foo Link (/ex/a)</Link>
        <br />
        <Link to={"/ex/b"}>Bar Link (/ex/b)</Link>
      </div>
    </>
  );
});

export default PageHeadingCustomUrlResolverExample;
