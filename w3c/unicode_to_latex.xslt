<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet
   xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
   xmlns:xs="http://www.w3.org/2001/XMLSchema"
   version="1.0">
   <xsl:output method="text"/>
   <xsl:template name="replace-string">
      <xsl:param name="text"/>
      <xsl:param name="replace"/>
      <xsl:param name="with"/>
      <xsl:choose>
         <xsl:when test="contains($text, $replace)">
            <xsl:value-of select="substring-before($text, $replace)"/>
            <xsl:value-of select="$with"/>
            <xsl:call-template name="replace-string">
               <xsl:with-param name="text"
                  select="substring-after($text, $replace)"/>
               <xsl:with-param name="replace" select="$replace"/>
               <xsl:with-param name="with" select="$with"/>
            </xsl:call-template>
         </xsl:when>
         <xsl:otherwise>
            <xsl:value-of select="$text"/>
         </xsl:otherwise>
      </xsl:choose>
   </xsl:template>
   <xsl:strip-space elements="*"/>
   <xsl:template match="/unicode/charlist">
      <xsl:text>(ns cayenne.latex
  (:require [clojure.string :as string]))

;; implements some transforms from unicode to bibtex special chars
;; generated with the command:
;; xsltproc unicode_to_latex.xslt http://www.w3.org/2003/entities/2007xml/unicode.xml

(def char-to-latex
  {
</xsl:text>
<xsl:for-each select="character">
   <!-- if lenght is 0, nothing to do. If it is 1 and an ascii text char,
        nothing either. We exclute weird cases where there is
        an embedded quote and if unicode codepoint is long (composed char)-->
   <xsl:if test="string-length(@id) = 6 and (string-length(latex)&gt;1 or (string-length(latex)=1 and not(starts-with(@id, 'U000') and substring(@id, 5, 1)=translate(substring(@id, 5, 1), 'ABCDEF', '') and @mode='text'))) and not(contains(latex, '&quot;'))">
      <xsl:variable name="codepoint" select="substring(@id, 3)"/>
      <xsl:text>   \u</xsl:text>
        <xsl:value-of select="$codepoint" />
        <xsl:text> "</xsl:text>
        <xsl:call-template name="replace-string">
           <xsl:with-param name="text" select="normalize-space(latex)"/>
           <xsl:with-param name="replace" select="'\'"/>
           <xsl:with-param name="with" select="'\\'"/>
        </xsl:call-template>
      <xsl:text>" ; </xsl:text>
      <xsl:value-of select="description"/>
      <xsl:text>
</xsl:text>
    </xsl:if>
</xsl:for-each>
<xsl:text>})

(defn ->latex-str [s]
  (string/join (map #(or (char-to-latex %) %) s)))
</xsl:text>
</xsl:template>
</xsl:stylesheet>
