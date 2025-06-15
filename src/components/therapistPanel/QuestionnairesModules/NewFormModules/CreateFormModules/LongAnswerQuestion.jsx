import CopyIcon from '@mui/icons-material/ContentCopy';
import SwitchButton from '../../../EventManagerModules/EMHeaderModules/AvailabilityModules/SwitchButton';
import MoreHorizMenu from '../../../therapistPanelModules/MoreHorizMenu';
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';

const LongAnswerQuestion = () => {
  return (
  <input
      placeholder="Long answer text"
      className="w-3/5 outline-none placeholder-zinc-600 dark:placeholder-zinc-400 p-2 self-center border-b border-zinc-600 dark:bg-neutral-800"
      type="text"
    />
  )
}

export default LongAnswerQuestion