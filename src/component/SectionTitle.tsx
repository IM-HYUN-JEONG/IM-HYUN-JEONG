import { useTheme } from 'next-themes';
import { Box } from '@mui/material';
import { colors } from 'src/styles/colors';

interface SectionTitleProp {
  title?: string;
  subTitle?: string;
}

export const CustomSectionTitle = ({ title, subTitle }: SectionTitleProp) => {
  const { theme } = useTheme();
  const bgColor = theme === 'dark' ? colors.dark : colors.light;

  return (
    <Box mb={4}>
      {title && (
        <Box
          component="span"
          display="inline-block"
          px={2}
          fontSize="1.5rem"
          fontWeight="bold"
          style={{
            background: `linear-gradient(180deg, rgba(0,0,0,0) 66%, ${bgColor} 33%)`
          }}
        >
          {title.toLocaleUpperCase()}
        </Box>
      )}
      {subTitle && (
        <Box pt={2} fontSize="0.875rem" fontWeight="600">
          {subTitle}
        </Box>
      )}
    </Box>
  );
};
