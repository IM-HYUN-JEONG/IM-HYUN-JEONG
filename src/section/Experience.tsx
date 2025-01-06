import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react';
import { useTranslation } from 'react-i18next';
import ExtraInfoDialog from 'src/component/dialog/ExtraInfoDialog';
import { CustomSectionTitle } from 'src/component/SectionTitle';
import { CustomSection } from '../component/CustomSection';
import { StackChip } from 'src/component/chip/StackChip';
import { UrlChip } from 'src/component/chip/UrlChip';
import { Companyli } from 'src/component/ul/Companyli';
import { Titleli } from 'src/component/ul/Titleli';
import { experienceData } from './experienceData';

// 공통 컴포넌트: 회사 정보를 렌더링
const CompanyRow = ({ name, homepageUrl, position, period }: any) => <Companyli name={name} homepageUrl={homepageUrl} position={position} period={period} />;

// 공통 컴포넌트: 기여/서비스 세부 정보를 다이얼로그로 렌더링
const ExperienceDialog = ({ title, iconType, content }: any) => (
  <ExtraInfoDialog iconType={iconType} dialogTitle={title} style={{ border: '1px solid red' }}>
    {content}
  </ExtraInfoDialog>
);

// 공통 컴포넌트: 업무 내용을 렌더링
const ExperienceList = ({ items }: any) => <Titleli list={items} />;

export default function Experience() {
  const { t } = useTranslation();

  return (
    <CustomSection id={'Experience'}>
      <CustomSectionTitle title={'Experience'} subTitle={t(`편리하고_가치있는_서비스를_개발하고_제대로된_제품을_만들고_있습니다`)} />
      <Table>
        <TableHeader>
          {['회사', '업무', '기여', '서비스'].map((headerItem) => (
            <TableColumn key={headerItem} align="center">
              {headerItem}
            </TableColumn>
          ))}
        </TableHeader>
        <TableBody>
          {experienceData.map((exp, index) => (
            <TableRow key={index}>
              <TableCell style={{ textAlign: 'left' }}>
                <CompanyRow {...exp.company} />
              </TableCell>
              <TableCell>
                <ExperienceList items={exp.tasks} />
              </TableCell>
              <TableCell align="center">{exp.contribution && <ExperienceDialog title={exp.contribution.title} iconType={exp.contribution.iconType} content={exp.contribution.content} />}</TableCell>
              <TableCell align="center">{exp.service && <ExperienceDialog title={exp.service.title} content={exp.service.content} />}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </CustomSection>
  );
}
