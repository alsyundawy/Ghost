import APAvatar from '@src/components/global/APAvatar';
import NewNoteModal from '@src/components/modals/NewNoteModal';
import {ActorProperties} from '@tryghost/admin-x-framework/api/activitypub';

const FeedInput: React.FC<{user?: ActorProperties}> = ({user}) => {
    return (
        <NewNoteModal>
            <div className='relative my-5 w-full hover:cursor-pointer'>
                <div className='pointer-events-none absolute left-4 top-4'>
                    <APAvatar author={user as ActorProperties} />
                </div>
                <div aria-label='New post' className='text inset-0 flex h-[72px] w-full items-center justify-start rounded-lg bg-white pl-[68px] text-left text-[1.5rem] font-normal tracking-normal text-gray-500 shadow-[0_5px_24px_0px_rgba(0,0,0,0.02),0px_2px_5px_0px_rgba(0,0,0,0.07),0px_0px_1px_0px_rgba(0,0,0,0.25)] transition-all hover:bg-white hover:shadow-[0_5px_24px_0px_rgba(0,0,0,0.05),0px_14px_12px_-9px_rgba(0,0,0,0.07),0px_0px_1px_0px_rgba(0,0,0,0.25)] dark:border dark:border-gray-925 dark:bg-black dark:shadow-none dark:hover:border-gray-800 dark:hover:bg-black dark:hover:shadow-none'>What&apos;s new?</div>
            </div>
        </NewNoteModal>
    );
};

export default FeedInput;