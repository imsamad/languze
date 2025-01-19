import { LoremIpsum } from '@/components/lorem';
import { NAVBAR_HEIGHT } from '@/config/global-ui-dims';

const ComputerNetworkPage = () => {
  return (
    <div
      className="flex min-h-screen"
      style={{
        marginTop: NAVBAR_HEIGHT + 30,
      }}
    >
      <div
        className="sticky max-w-60"
        style={{
          maxHeight: `calc(100vh - ${NAVBAR_HEIGHT + 30}px)`,
          minHeight: `calc(100vh - ${NAVBAR_HEIGHT + 30}px)`,
          overflow: 'hidden',
          // +10, to adjust tip of scrollbar
          top: NAVBAR_HEIGHT + 30 + 10,
        }}
      >
        <div className="max-h-full overflow-y-auto overflow-x-hidden w-full">
          <LoremIpsum n={100} />
        </div>
      </div>
      <div className="flex-1 px-4">
        <LoremIpsum n={100} />
      </div>
    </div>
  );
};

export default ComputerNetworkPage;
