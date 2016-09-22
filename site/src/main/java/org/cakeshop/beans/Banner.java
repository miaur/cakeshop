package org.cakeshop.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoHtml;
import org.hippoecm.hst.content.beans.standard.HippoGalleryImageSet;
import org.hippoecm.hst.content.beans.standard.HippoBean;
import org.cakeshop.beans.Imageset;

@HippoEssentialsGenerated(internalName = "cakeshopproject:bannerdocument")
@Node(jcrType = "cakeshopproject:bannerdocument")
public class Banner extends BaseDocument {
    @HippoEssentialsGenerated(internalName = "cakeshopproject:title")
    public String getTitle() {
        return getProperty("cakeshopproject:title");
    }

    @HippoEssentialsGenerated(internalName = "cakeshopproject:content")
    public HippoHtml getContent() {
        return getHippoHtml("cakeshopproject:content");
    }

    @HippoEssentialsGenerated(internalName = "cakeshopproject:link")
    public HippoBean getLink() {
        return getLinkedBean("cakeshopproject:link", HippoBean.class);
    }

    @HippoEssentialsGenerated(internalName = "cakeshopproject:image")
    public Imageset getImage() {
        return getLinkedBean("cakeshopproject:image", Imageset.class);
    }
}
