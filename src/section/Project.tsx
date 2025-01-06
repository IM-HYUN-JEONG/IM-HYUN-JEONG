import { StackChip } from '@component/chip/StackChip';
import { UrlChip } from '@component/chip/UrlChip';
import ExtraInfoDialog from '@component/dialog/ExtraInfoDialog';
import { Titleli } from '@component/ul/Titleli';
import { Stack } from '@mui/material';
import { Image, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react';
import { CustomSectionTitle } from 'src/component/SectionTitle';
import { CustomSection } from '../component/CustomSection';

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
          {/* Orury (클라이밍 커뮤니티) */}
          <TableRow key={'가우디오랩'}>
            <TableCell>Orury (클라이밍 커뮤니티)</TableCell>
            <TableCell>
              <div>작성하기</div>
              <StackChip stackList={['Typescript', 'Next-js', 'SWR', 'Tailwind', 'Axios', 'Zustand', 'ESLint', 'Prettier', 'Github', 'react-kakao-maps-sdk']} />
            </TableCell>

            <TableCell>
              <ExtraInfoDialog dialogTitle={'Orury (클라이밍 커뮤니티)'}>
                <video controls width={'100%'} autoPlay={true}>
                  <source src={''}></source>
                </video>

                <Titleli title={'개발 목표'} list={['작성하기']} />
                <Titleli title={'개발 성과'} list={['작성하기']} />
                <Titleli title={'내 기여도'} list={['작성하기']} />
              </ExtraInfoDialog>
            </TableCell>
          </TableRow>
          {/* Freeze Instead NFT */}
          <TableRow key={'Freeze Instead NFT'}>
            <TableCell>Freeze Instead NFT</TableCell>
            <TableCell>
              <div>Claim Swap의 CLA freeze서비스의 특정 기간동안 묶여있는 점을 NFT특성을 활용해 NFT를 freeze를 증명하는 하나의 증표로 사용하여 개인 거래하는 자산 유동화 서비스입니다.</div>
              <StackChip stackList={['Typescript', 'React', 'Next-js', 'Recoil', 'Solidity', 'Bignumber.js', 'Caver-js', 'Chakra-ui', 'Github']} />
            </TableCell>

            <TableCell>
              <ExtraInfoDialog dialogTitle={'여행사 사내솔루션(ERP+CRM)'}>
                <Image src="" width={'100%'}></Image>
                <Titleli title={'개발 목표'} list={['작성하기']} />
                <Titleli title={'개발 성과'} list={['작성하기']} />
                <Titleli title={'내 기여도'} list={['작성하기']} />
              </ExtraInfoDialog>
            </TableCell>
          </TableRow>
          {/* NFT Mint */}
          <TableRow key={'NFT Mint'}>
            <TableCell>NFT Mint</TableCell>
            <TableCell>
              <div>React와 contract를 사용하여 NFT발행을 metamask로 구현한 서비스입니다.</div>
              <StackChip stackList={['Javascript', 'React', 'Chakra UI', 'SASS', 'Solidity', 'Ethers', 'Github']} />
            </TableCell>

            <TableCell>
              <ExtraInfoDialog dialogTitle={'Crypto Chart'}>
                <Image src="" width={'100%'}></Image>

                <Titleli title={'개발 목표'} list={['작성하기']} />
                <Titleli title={'개발 성과'} list={['작성하기']} />
                <Titleli title={'내 기여도'} list={['작성하기']} />
              </ExtraInfoDialog>
            </TableCell>
          </TableRow>

          {/* Crypto Chart */}
          <TableRow key={'실시간 코인 가격 확인 서비스 : Crypto Chart'}>
            <TableCell>Crypto Chart</TableCell>
            <TableCell>
              <div>외부 오픈API와 통신하여 Apex Charts로 실시간 코인들의 잔액을 확인하는 서비스입니다.</div>
              <StackChip stackList={['Typescript', 'React', 'Recoil', 'Styled-components', 'Apex Charts', 'Github']} />
            </TableCell>

            <TableCell>
              <ExtraInfoDialog size="xl" dialogTitle={'실시간 코인 가격 확인 서비스 : Crypto Chart'}>
                <div className="flex items-center justify-center w-full gap-1">
                  <Image className="max-h-[30vh] overflow-y-auto" src="" width={'100%'}></Image>
                </div>
                <Titleli title={'개발 목표'} list={['작성하기']} />
                <Titleli title={'개발 성과'} list={['작성하기']} />
                <Titleli title={'내 기여도'} list={['작성하기']} />
              </ExtraInfoDialog>
            </TableCell>
          </TableRow>
          <TableRow key={'Transfer Tokens'}>
            <TableCell scope="row">Transfer Tokens</TableCell>
            <TableCell>
              <div>카카오톡 Klip에 없는 알트토큰들(BORA, WEMIX, KLEVA, KCAKE 등)을 전송하는 서비스입니다.</div>
              <StackChip stackList={['Typescript', 'React', 'Plotly', 'MUI', 'Babel', 'Webpack', 'GithubPage', 'Github']} />
            </TableCell>

            <TableCell>
              <ExtraInfoDialog dialogTitle={'알트코인 전송 서비스 : Transfer Tokens'}>
                <video controls width={'100%'} autoPlay={true}>
                  <source src={''}></source>
                </video>
                <Titleli title={'개발 목표'} list={['작성하기']} />
                <Titleli title={'개발 성과'} list={['작성하기']} />
                <Titleli title={'내 기여도'} list={['작성하기']} />
                <Stack direction={'row'} justifyContent={'center'}>
                  <UrlChip title={'데모 사이트'} url={''} />
                  <UrlChip title={'소스코드'} url={''} />
                </Stack>
              </ExtraInfoDialog>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </CustomSection>
  );
}
