export const isParentActive = (children, path) => {
    if (!children && !path) {
        return false;
    }
    return children.some((item) =>
        item.path?.split('/')[1] === path.split('/')[1]
            ? true
            : item?.subMenu?.some((item2) => item2.path?.split('/')[1] === path.split('/')[1])
    );
};
