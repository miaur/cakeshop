package org.cakeshop.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoGalleryImageSet;
import org.hippoecm.hst.content.beans.standard.HippoGalleryImageBean;

@HippoEssentialsGenerated(internalName = "cakeshopproject:imageset")
@Node(jcrType = "cakeshopproject:imageset")
public class Imageset extends HippoGalleryImageSet {
    @HippoEssentialsGenerated(internalName = "cakeshopproject:banner")
    public HippoGalleryImageBean getBanner() {
        return getBean("cakeshopproject:banner", HippoGalleryImageBean.class);
    }

    @HippoEssentialsGenerated(internalName = "cakeshopproject:portfoliofour")
    public HippoGalleryImageBean getPortfoliofour() {
        return getBean("cakeshopproject:portfoliofour",
                HippoGalleryImageBean.class);
    }
}
