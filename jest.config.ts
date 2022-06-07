import { createJestConfig } from '@craco/craco';
import cracoConfig from './craco.config';

const jestConfig = createJestConfig(cracoConfig);
export default jestConfig;
