import { render, screen } from '@testing-library/react-native';
import Stat from "../../components/Stat";

describe('Stat', () => {
    it('renders a stat item and its count', () => {
        render(<Stat statItem="starCount" stat="2000"/>);

        screen.debug();

        expect(screen.getByText('starCount')).toBeDefined();
        expect(screen.getByText('2.0k')).toBeDefined();
    });
});