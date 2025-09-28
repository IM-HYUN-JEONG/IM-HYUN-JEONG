import UrlChip from '@component/chip/UrlChip';
import ExtraInfoDialog from '@component/dialog/ExtraInfoDialog';
import Titleli from '@component/ul/Titleli';
import { Stack } from '@mui/material';
import { Image, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react';
import CustomSectionTitle from 'src/component/SectionTitle';
import CustomSection from '../component/CustomSection';
import StackChip from '@component/chip/StackChip';
import { projectData } from './projectData'; // 위 배열 import

export default function Project() {
  return (
    <CustomSection id={'Project'}>
      <CustomSectionTitle title={'Personal PROJECT'} subTitle={'신기술 + 좋은 옛기술을 통해 프로젝트를 만들어갑니다.'} />
      <Table aria-label="customized table" bottomContent={<div className="flex justify-center w-full text-xs text-foreground-400">Github애서 코드 공개되어있습니다.</div>}>
        <TableHeader>
          {['프로젝트', '소개 / 사용기술', '상세정보'].map((headerItem) => (
            <TableColumn key={headerItem}>{headerItem}</TableColumn>
          ))}
        </TableHeader>
        <TableBody>
          {projectData.map((project) => (
            <TableRow key={project.key}>
              <TableCell>{project.title}</TableCell>

              <TableCell>
                <div>{project.desc}</div>
                <StackChip stackList={project.stackList} />
              </TableCell>

              <TableCell>
                <ExtraInfoDialog dialogTitle={project.dialogTitle} size="xl">
                  {/* 비디오/이미지 둘 중 하나만 */}
                  {project.videoSrc ? (
                    <video controls width={'100%'} autoPlay>
                      <source src={project.videoSrc}></source>
                    </video>
                  ) : (
                    <Image src={project.imageSrc} width={'100%'} />
                  )}

                  <Titleli title={'개발 목표'} list={project.goals} />
                  <Titleli title={'개발 성과'} list={project.results} />
                  <Titleli title={'내 기여도'} list={project.contributions} />

                  {project.urlChips.length > 0 && (
                    <Stack direction={'row'} justifyContent={'center'}>
                      {project.urlChips.map((chip) => (
                        <UrlChip key={chip.title} title={chip.title} url={chip.url} />
                      ))}
                    </Stack>
                  )}
                </ExtraInfoDialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </CustomSection>
  );
}
