import React from 'react';
import styled from 'styled-components';
import { Card, Table, TableBody, TableColumn, TableHeader, TableRow } from '@nextui-org/react';

interface CustomTableProp {
  header?: string[];
  footer?: string;
  children?: any;
}

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 0 0.5rem;
  font-size: 0.875rem;
`;

export default function CustomTable({ header = [], footer, children }: CustomTableProp) {
  return (
    <Card>
      <Table aria-label="customized table">
        <TableHeader>
          <TableRow>
            {header.map((headerItem) => (
              <TableColumn key={headerItem} align="center">
                {headerItem}
              </TableColumn>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>{children}</TableBody>
      </Table>
      {footer && <FooterContainer>{footer}</FooterContainer>}
    </Card>
  );
}
