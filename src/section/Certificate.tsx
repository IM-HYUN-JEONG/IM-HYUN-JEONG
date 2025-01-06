import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react';
import Image from 'next/image';
import ExtraInfoDialog from 'src/component/dialog/ExtraInfoDialog';
import { CustomSectionTitle } from 'src/component/SectionTitle';
import { CustomSection } from '../component/CustomSection';
import { Box } from '@mui/material';

const certificateItems = [
  {
    key: 1,
    acquiredDate: '2024.09.20',
    certificateName: 'SQLD',
    acquisitionReason: `데이터 분석 시각화와 자동화분석도구를 만들기 위한 업무를 위해 취득했습니다.`,
    certificates: ['sqld']
  }
];

const columns = [
  {
    key: 'acquiredDate',
    label: 'Acquired Date'
  },
  {
    key: 'certificateName',
    label: 'Certificate Name'
  },
  {
    key: 'acquisitionReason',
    label: 'Acquisition Reason'
  },
  {
    key: 'certificates',
    label: 'Certificates'
  }
];

export default function Certificate() {
  return (
    <CustomSection id={'Certificate'}>
      <CustomSectionTitle title={'Certificate'} subTitle={'자격증이 실력의 척도가 될 수는 없지만, 관심과 꾸준함에 대한 척도는 될 수 있다고 생각합니다.'} />
      <Table aria-label="customized table">
        <TableHeader columns={columns}>{(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}</TableHeader>
        <TableBody>
          {certificateItems.map((row) => (
            <TableRow key={row.key}>
              <TableCell>{row.acquiredDate}</TableCell>
              <TableCell>{row.certificateName}</TableCell>
              <TableCell>{row.acquisitionReason}</TableCell>
              <TableCell>
                <ExtraInfoDialog dialogTitle={`Certificates`}>
                  <Box display="flex" justifyContent="center" alignItems="center" gap={2} overflow="auto">
                    {row.certificates.map((path) => (
                      <Image key={path} src={`/images/certificate/${path}.png`} height={450} width={300} alt={'certificate image'} />
                    ))}
                  </Box>
                </ExtraInfoDialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </CustomSection>
  );
}
