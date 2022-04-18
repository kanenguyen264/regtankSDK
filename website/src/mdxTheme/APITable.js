import React from "react";
import PropTypes from "prop-types";
import Table from "@material-ui/core/Table";
import {TableRow} from "@material-ui/core";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import ProtegoCP from "./ProtegoCP";
import TableBody from "@material-ui/core/TableBody";
import styles from "./APITable.module.scss";
import Markdown from "markdown-to-jsx";

const APITableDescription = ({description = ""}) => {
  const mainContent = description
    .split("\n")
    .filter((line) => !/^@/.test(line))
    .join("\n");

  return <Markdown>{mainContent}</Markdown>;
};

const APITable = function APITable({component}) {
  return (
    <div className={styles.APITable}>
      <ProtegoCP noTitle>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Default</TableCell>
              <TableCell>Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.entries(component.__docgenInfo?.props || {})
              .filter(([_, propSpec]) => !/@ignore/.test(propSpec.description))
              .map(([propName, propSpec]) => (
                <TableRow key={propName}>
                  <TableCell className={styles.Prop}>
                    {propName}
                    {propSpec.required && (
                      <i className={styles.Required}>Required</i>
                    )}
                  </TableCell>
                  <TableCell>
                    <strong>
                      <pre className={styles.Type}>{propSpec.type?.name}</pre>
                    </strong>
                  </TableCell>
                  <TableCell>{propSpec.defaultValue?.value}</TableCell>
                  <TableCell>
                    <APITableDescription description={propSpec.description} />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </ProtegoCP>
    </div>
  );
};

APITable.propTypes = {
  component: PropTypes.elementType.isRequired,
};

export default APITable;
