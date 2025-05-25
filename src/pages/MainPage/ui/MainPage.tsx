import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';
import { HStack } from 'shared/ui/Stack';
import { ListBox } from 'shared/ui/ListBox/ListBox';

type Props = {}

const MainPage = (props: Props) => {
    const { t } = useTranslation('main');

    return (
        <Page>
            {t('Главная')}
            <HStack>
                <ListBox
                    defaultValue="choose value"
                    onChange={(value: string) => {}}
                    value="1"
                    items={[
                        {
                            value: '1',
                            content: 'content 1',
                            disabled: false,
                        },
                        {
                            value: '2',
                            content: 'content 2',
                            disabled: true,
                        },
                    ]}
                />
            </HStack>
        </Page>
    );
};

export default MainPage;
