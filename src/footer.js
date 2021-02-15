import GitHubIcon from '@material-ui/icons/GitHub';
import PostAddIcon from '@material-ui/icons/PostAdd';
import Button from '@material-ui/core/Button';

export default function FooterComponent(githubUrl, isViewAddPage = false) {
    const renderAddPage = () => {
        if (isViewAddPage) {
            return (
                <div class="OtherButton">
                    <Button variant="outlined" color="primary" onClick={clickAddPage}>
                            <PostAddIcon />
                    </Button>
                </div>
            );
            
        } else {
            return (
                <></>
            );
        }
    }
    return (
        <>
            {renderAddPage}
            <div class="OtherButtonContainer">
                <div class="OtherButton">
                    <Button variant="outlined" color="primary" onClick={() => {clickGithub(githubUrl)}}>
                        <GitHubIcon />
                    </Button>
                </div>
            </div>
            <p>Copyright © 2021 naok All Rights Reserved.</p>
        </>
    )
}

const clickGithub = (githubUrl) => {
    window.open(githubUrl, '_blank');
}


const clickAddPage = () => {
    window.open('./index.html', '_blank');
}
