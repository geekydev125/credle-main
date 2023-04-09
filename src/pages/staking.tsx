import { StakingPanel } from 'src/components/staking/staking-panel';
import { StakingStatus } from 'src/components/staking/staking-status';
import { StakingText } from 'src/components/staking/staking-text';

export const Staking = () => {
  return (
    <>
      <StakingText />
      <StakingStatus />
      <StakingPanel />
    </>
  );
};
